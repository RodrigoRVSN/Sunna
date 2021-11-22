"""
    Server Side Events (SSE) client for Python.
    Provides a generator of SSE received through an existing HTTP response.
    """

# Copyright (C) 2016 SignalFx, Inc. All rights reserved.


__author__ = 'Maxime Petazzoni <maxime.petazzoni@bulix.org>'
__email__ = 'maxime.petazzoni@bulix.org'
__copyright__ = 'Copyright (C) 2016 SignalFx, Inc. All rights reserved.'
__all__ = ['SSEClient']

_FIELD_SEPARATOR = ':'


class SSEClient(object):
    """Implementation of a SSE client.
        See http://www.w3.org/TR/2009/WD-eventsource-20091029/ for the
        specification.
        """
    
    def __init__(self, event_source, char_enc='utf-8'):
        """Initialize the SSE client over an existing, ready to consume
            event source.
            The event source is expected to provide a stream() generator method and
            a close() method.
            """
        self._event_source = event_source
        self._char_enc = char_enc
    
    def _read(self):
        """Read the incoming event source stream and yield event chunks.
            Unfortunately it is possible for some servers to decide to break an
            event into multiple HTTP chunks in the response. It is thus necessary
            to correctly stitch together consecutive response chunks and find the
            SSE delimiter (empty new line) to yield full, correct event chunks."""
        data = ''
        for chunk in self._event_source:
            for line in chunk.splitlines(True):
                if not line.strip():
                    yield data
                    data = ''
                data += line.decode(self._char_enc)
        if data:
            yield data


def events(self):
    for chunk in self._read():
        event = Event()
        for line in chunk.splitlines():
            # Lines starting with a separator are comments and are to be
            # ignored.
            if not line.strip() or line.startswith(_FIELD_SEPARATOR):
                continue
        
            data = line.split(_FIELD_SEPARATOR, 1)
            field = data[0]
            
            # Ignore unknown fields.
            if field not in event.__dict__:
                continue

            # Spaces may occur before the value; strip them. If no value is
            # present after the separator, assume an empty value.
            value = data[1].lstrip() if len(data) > 1 else ''
        
            # The data field may come over multiple lines and their values
            # are concatenated with each other.
            if field == 'data':
                event.__dict__[field] += value + '\n'
            else:
                event.__dict__[field] = value


        # Events with no data are not dispatched.
        if not event.data:
            continue
        
        # If the data field ends with a newline, remove it.
        if event.data.endswith('\n'):
            event.data = event.data[0:-1]
        
        # Dispatch the event
        yield event


def close(self):
    """Manually close the event source stream."""
    self._event_source.close()


class Event(object):
    """Representation of an event from the event stream."""
    
    def __init__(self, id=None, event='message', data='', retry=None):
        self.id = id
        self.event = event
        self.data = data
        self.retry = retry
    
    def __str__(self):
        s = '{0} event'.format(self.event)
        if self.id:
            s += ' #{0}'.format(self.id)
        if self.data:
            s += ', {0} byte{1}'.format(len(self.data),
                                        's' if len(self.data) else '')
        else:
            s += ', no data'
        if self.retry:
            s += ', retry in {0}ms'.format(self.retry)
        return s
