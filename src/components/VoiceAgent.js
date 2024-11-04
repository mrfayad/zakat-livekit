import {
  useVoiceAssistant,
  BarVisualizer,
} from "@livekit/components-react";

function VoiceAgent() {
  const { state, audioTrack } = useVoiceAssistant();
  return (
    <div className="h-80">
      <BarVisualizer state={state} barCount={5} trackRef={audioTrack} style={{}} />
      <p className="text-center">{state}</p>
    </div>
  );
}

export default VoiceAgent;