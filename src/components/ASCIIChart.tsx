import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

const ASCIIChart = () => {
  const asciiData = [
    { char: 'A', decimal: 65, binary: '01000001' },
    { char: 'B', decimal: 66, binary: '01000010' },
    { char: 'C', decimal: 67, binary: '01000011' },
    { char: 'D', decimal: 68, binary: '01000100' },
    { char: 'E', decimal: 69, binary: '01000101' },
    { char: 'F', decimal: 70, binary: '01000110' },
    { char: 'G', decimal: 71, binary: '01000111' },
    { char: 'H', decimal: 72, binary: '01001000' },
    { char: 'I', decimal: 73, binary: '01001001' },
    { char: 'J', decimal: 74, binary: '01001010' },
    { char: 'K', decimal: 75, binary: '01001011' },
    { char: 'L', decimal: 76, binary: '01001100' },
    { char: 'M', decimal: 77, binary: '01001101' },
    { char: 'N', decimal: 78, binary: '01001110' },
    { char: 'O', decimal: 79, binary: '01001111' },
    { char: 'P', decimal: 80, binary: '01010000' },
    { char: 'Q', decimal: 81, binary: '01010001' },
    { char: 'R', decimal: 82, binary: '01010010' },
    { char: 'S', decimal: 83, binary: '01010011' },
    { char: 'T', decimal: 84, binary: '01010100' },
    { char: 'U', decimal: 85, binary: '01010101' },
    { char: 'V', decimal: 86, binary: '01010110' },
    { char: 'W', decimal: 87, binary: '01010111' },
    { char: 'X', decimal: 88, binary: '01011000' },
    { char: 'Y', decimal: 89, binary: '01011001' },
    { char: 'Z', decimal: 90, binary: '01011010' },
    { char: 'a', decimal: 97, binary: '01100001' },
    { char: 'b', decimal: 98, binary: '01100010' },
    { char: 'c', decimal: 99, binary: '01100011' },
    { char: 'd', decimal: 100, binary: '01100100' },
    { char: 'e', decimal: 101, binary: '01100101' },
    { char: 'f', decimal: 102, binary: '01100110' },
    { char: 'g', decimal: 103, binary: '01100111' },
    { char: 'h', decimal: 104, binary: '01101000' },
    { char: 'i', decimal: 105, binary: '01101001' },
    { char: 'j', decimal: 106, binary: '01101010' },
    { char: 'k', decimal: 107, binary: '01101011' },
    { char: 'l', decimal: 108, binary: '01101100' },
    { char: 'm', decimal: 109, binary: '01101101' },
    { char: 'n', decimal: 110, binary: '01101110' },
    { char: 'o', decimal: 111, binary: '01101111' },
    { char: 'p', decimal: 112, binary: '01110000' },
    { char: 'q', decimal: 113, binary: '01110001' },
    { char: 'r', decimal: 114, binary: '01110010' },
    { char: 's', decimal: 115, binary: '01110011' },
    { char: 't', decimal: 116, binary: '01110100' },
    { char: 'u', decimal: 117, binary: '01110101' },
    { char: 'v', decimal: 118, binary: '01110110' },
    { char: 'w', decimal: 119, binary: '01110111' },
    { char: 'x', decimal: 120, binary: '01111000' },
    { char: 'y', decimal: 121, binary: '01111001' },
    { char: 'z', decimal: 122, binary: '01111010' },
    { char: '0', decimal: 48, binary: '00110000' },
    { char: '1', decimal: 49, binary: '00110001' },
    { char: '2', decimal: 50, binary: '00110010' },
    { char: '3', decimal: 51, binary: '00110011' },
    { char: '4', decimal: 52, binary: '00110100' },
    { char: '5', decimal: 53, binary: '00110101' },
    { char: '6', decimal: 54, binary: '00110110' },
    { char: '7', decimal: 55, binary: '00110111' },
    { char: '8', decimal: 56, binary: '00111000' },
    { char: '9', decimal: 57, binary: '00111001' },
    { char: ' ', decimal: 32, binary: '00100000' },
    { char: '!', decimal: 33, binary: '00100001' },
    { char: '?', decimal: 63, binary: '00111111' },
    { char: '.', decimal: 46, binary: '00101110' },
    { char: ',', decimal: 44, binary: '00101100' },
    { char: ':', decimal: 58, binary: '00111010' },
    { char: ';', decimal: 59, binary: '00111011' },
    { char: "'", decimal: 39, binary: '00100111' },
    { char: '"', decimal: 34, binary: '00100010' },
    { char: '-', decimal: 45, binary: '00101101' },
    { char: '(', decimal: 40, binary: '00101000' },
    { char: ')', decimal: 41, binary: '00101001' },
  ];

  return (
    <div className="h-screen bg-gradient-terminal border-l border-border">
      <div className="p-4 border-b border-border">
        <h2 className="text-xl font-bold text-clingy-blue mb-2">ASCII Binary Chart</h2>
        <p className="text-sm text-muted-foreground">
          💖 Use this to decode ClingOS-01's emotional binary outbursts!
        </p>
      </div>
      
      <ScrollArea className="h-[calc(100vh-120px)] p-4">
        <div className="space-y-2">
          <div className="grid grid-cols-3 gap-2 text-xs font-semibold text-clingy-green mb-4">
            <div>CHAR</div>
            <div>DEC</div>
            <div>BINARY</div>
          </div>
          
          {asciiData.map((item, index) => (
            <Card 
              key={index} 
              className="p-2 bg-card/50 border-clingy-pink/30 hover:bg-card hover:border-clingy-pink transition-all duration-200"
            >
              <div className="grid grid-cols-3 gap-2 text-sm font-mono">
                <div className="text-clingy-pink font-bold text-center">
                  {item.char === ' ' ? '⎵' : item.char}
                </div>
                <div className="text-clingy-green text-center">{item.decimal}</div>
                <div className="text-clingy-blue">{item.binary}</div>
              </div>
            </Card>
          ))}
          
          <Card className="mt-6 p-4 bg-clingy-dark border-clingy-pink">
            <h3 className="text-clingy-pink font-bold mb-2">💔 Helpful Hints:</h3>
            <ul className="text-sm text-foreground space-y-1">
              <li>• Separate each 8-bit character with a space</li>
              <li>• Try saying "Hi" = 01001000 01101001</li>
              <li>• "Love" = 01001100 01101111 01110110 01100101</li>
              <li>• ClingOS-01 gets VERY emotional with longer messages!</li>
            </ul>
          </Card>
        </div>
      </ScrollArea>
    </div>
  );
};

export default ASCIIChart;