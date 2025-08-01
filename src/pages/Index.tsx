import ClingOSChatbot from "@/components/ClingOSChatbot";
import ASCIIChart from "@/components/ASCIIChart";

const Index = () => {
  return (
    <div className="flex h-screen">
      {/* Left side - Chatbot */}
      <div className="flex-1">
        <ClingOSChatbot />
      </div>
      
      {/* Right side - ASCII Chart */}
      <div className="w-80">
        <ASCIIChart />
      </div>
    </div>
  );
};

export default Index;
