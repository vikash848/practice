import React, { useEffect } from 'react'

const Scroll = () => {

useEffect(()=>{
    window.scrollTo(0,document.body.scrollHeight);
})
 
 console.log(document.body.scrollHeight);

  return (
    <div>
        <h3>Scroll</h3>
        <div>
        WebRTC serves multiple purposes; together with the Media Capture and Streams API, they provide powerful multimedia capabilities to the Web, including support for audio and video conferencing, file exchange, screen sharing, identity management, and interfacing with legacy telephone systems including support for sending DTMF (touch-tone dialing) signals. Connections between peers can be made without requiring any special drivers or plug-ins, and can often be made without any intermediary servers.

Connections between two peers are represented by the RTCPeerConnection interface. Once a connection has been established and opened using RTCPeerConnection, media streams (MediaStreams) and/or data channels (RTCDataChannels) can be added to the connection.

Media streams can consist of any number of tracks of media information; tracks, which are represented by objects based on the MediaStreamTrack interface, may contain one of a number of types of media data, including audio, video, and text (such as subtitles or even chapter names). Most streams consist of at least one audio track and likely also a video track, and can be used to send and receive both live media or stored media information (such as a streamed movie).

You can also use the connection between two peers to exchange arbitrary binary data using the RTCDataChannel interface. This can be used for back-channel information, metadata exchange, game status packets, file transfers, or even as a primary channel for data transfer.

Interoperability
WebRTC is in general well supported in modern browsers, but some incompatibilities remain. The adapter.js library is a shim to insulate apps from these incompatibilities.

WebRTC reference
Because WebRTC provides interfaces that work together to accomplish a variety of tasks, we have divided up the reference by category. Please see the sidebar for an alphabetical list.

Connection setup and management
These interfaces, dictionaries, and types are used to set up, open, and manage WebRTC connections. Included are interfaces representing peer media connections, data channels, and interfaces used when exchanging information on the capabilities of each peer in order to select the best possible configuration for a two-way media connection.

Interfaces
RTCPeerConnection
Represents a WebRTC connection between the local computer and a remote peer. It is used to handle efficient streaming of data between the two peers.

RTCDataChannel
Represents a bi-directional data channel between two peers of a connection.

RTCDataChannelEvent
Represents events that occur while attaching a RTCDataChannel to a RTCPeerConnection. The only event sent with this interface is datachannel.

RTCSessionDescription
Represents the parameters of a session. Each RTCSessionDescription consists of a description type indicating which part of the offer/answer negotiation process it describes and of the SDP descriptor of the session.

RTCStatsReport
Provides information detailing statistics for a connection or for an individual track on the connection; the report can be obtained by calling RTCPeerConnection.getStats(). Details about using WebRTC statistics can be found in WebRTC Statistics API.

RTCIceCandidate
Represents a candidate Interactive Connectivity Establishment (ICE) server for establishing an RTCPeerConnection.

RTCIceTransport
Represents information about an ICE transport.

RTCPeerConnectionIceEvent
Represents events that occur in relation to ICE candidates with the target, usually an RTCPeerConnection. Only one event is of this type: icecandidate.

RTCRtpSender
Manages the encoding and transmission of data for a MediaStreamTrack on an RTCPeerConnection.

RTCRtpReceiver
Manages the reception and decoding of data for a MediaStreamTrack on an RTCPeerConnection.

RTCTrackEvent
The interface used to represent a track event, which indicates that an RTCRtpReceiver object was added to the RTCPeerConnection object, indicating that a new incoming MediaStreamTrack was created and added to the RTCPeerConnection.

RTCSctpTransport
Provides information which describes a Stream Control Transmission Protocol (SCTP) transport and also provides a way to access the underlying Datagram Transport Layer Security (DTLS) transport over which SCTP packets for all of an RTCPeerConnection's data channels are sent and received.
        </div>
        <div>WebRTC serves multiple purposes; together with the Media Capture and Streams API, they provide powerful multimedia capabilities to the Web, including support for audio and video conferencing, file exchange, screen sharing, identity management, and interfacing with legacy telephone systems including support for sending DTMF (touch-tone dialing) signals. Connections between peers can be made without requiring any special drivers or plug-ins, and can often be made without any intermediary servers.

Connections between two peers are represented by the RTCPeerConnection interface. Once a connection has been established and opened using RTCPeerConnection, media streams (MediaStreams) and/or data channels (RTCDataChannels) can be added to the connection.

Media streams can consist of any number of tracks of media information; tracks, which are represented by objects based on the MediaStreamTrack interface, may contain one of a number of types of media data, including audio, video, and text (such as subtitles or even chapter names). Most streams consist of at least one audio track and likely also a video track, and can be used to send and receive both live media or stored media information (such as a streamed movie).

You can also use the connection between two peers to exchange arbitrary binary data using the RTCDataChannel interface. This can be used for back-channel information, metadata exchange, game status packets, file transfers, or even as a primary channel for data transfer.

Interoperability
WebRTC is in general well supported in modern browsers, but some incompatibilities remain. The adapter.js library is a shim to insulate apps from these incompatibilities.

WebRTC reference
Because WebRTC provides interfaces that work together to accomplish a variety of tasks, we have divided up the reference by category. Please see the sidebar for an alphabetical list.

Connection setup and management
These interfaces, dictionaries, and types are used to set up, open, and manage WebRTC connections. Included are interfaces representing peer media connections, data channels, and interfaces used when exchanging information on the capabilities of each peer in order to select the best possible configuration for a two-way media connection.

Interfaces
RTCPeerConnection
Represents a WebRTC connection between the local computer and a remote peer. It is used to handle efficient streaming of data between the two peers.

RTCDataChannel
Represents a bi-directional data channel between two peers of a connection.

RTCDataChannelEvent
Represents events that occur while attaching a RTCDataChannel to a RTCPeerConnection. The only event sent with this interface is datachannel.

RTCSessionDescription
Represents the parameters of a session. Each RTCSessionDescription consists of a description type indicating which part of the offer/answer negotiation process it describes and of the SDP descriptor of the session.

RTCStatsReport
Provides information detailing statistics for a connection or for an individual track on the connection; the report can be obtained by calling RTCPeerConnection.getStats(). Details about using WebRTC statistics can be found in WebRTC Statistics API.

RTCIceCandidate
Represents a candidate Interactive Connectivity Establishment (ICE) server for establishing an RTCPeerConnection.

RTCIceTransport
Represents information about an ICE transport.

RTCPeerConnectionIceEvent
Represents events that occur in relation to ICE candidates with the target, usually an RTCPeerConnection. Only one event is of this type: icecandidate.

RTCRtpSender
Manages the encoding and transmission of data for a MediaStreamTrack on an RTCPeerConnection.

RTCRtpReceiver
Manages the reception and decoding of data for a MediaStreamTrack on an RTCPeerConnection.

RTCTrackEvent
The interface used to represent a track event, which indicates that an RTCRtpReceiver object was added to the RTCPeerConnection object, indicating that a new incoming MediaStreamTrack was created and added to the RTCPeerConnection.

RTCSctpTransport
Provides information which describes a Stream Control Transmission Protocol (SCTP) transport and also provides a way to access the underlying Datagram Transport Layer Security (DTLS) transport over which SCTP packets for all of an RTCPeerConnection's data channels are sent and received.</div>
    </div>
  )
}

export default Scroll