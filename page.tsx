'use client';
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function Home() {
  const [activated, setActivated] = useState(false);
  const [phone, setPhone] = useState("");

  const handleActivate = () => {
    if (phone === "0713819966") {
      setActivated(true);
    } else {
      alert("Pay KES 100 to 0713819966 to activate.");
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <h1 className="text-4xl font-bold text-center">𝑙𝑒𝑎𝑓𝑡𝑒𝑥𝑡 𝑎𝑔𝑒𝑛𝑐𝑖𝑒𝑠</h1>

      {!activated ? (
        <Card>
          <CardContent className="space-y-4 p-6">
            <p className="text-lg">Pay KES 100 to 0713819966 to activate your account.</p>
            <Input
              type="text"
              placeholder="Enter payment number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <Button onClick={handleActivate}>Activate Account</Button>
            <p className="text-sm text-gray-500">
              Having issues? Help Center will reach out via SMS to 0713819966.
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Upload Content</h2>
              <Input type="file" multiple />
              <p className="text-sm text-gray-500 mt-2">
                You can upload videos or any content here. Only admin (you) should access this feature.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Public Content</h2>
              <p className="text-gray-700">Content is visible to everyone after activation.</p>
              <ul className="list-disc ml-6 mt-2 space-y-2">
                <li>Sample video 1 (you'll upload)</li>
                <li>Sample document 2</li>
                <li>More content goes here...</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}