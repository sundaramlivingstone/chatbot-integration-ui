import React, { useState } from "react";
import {
  ClipboardCopy,
  Mail,
  ExternalLink,
  PartyPopper,
  Share2,
  MessagesSquare,
  LayoutDashboard,
} from "lucide-react";
import confetti from "canvas-confetti";

const ChatbotIntegration = () => {
  const [showPreview, setShowPreview] = useState(false);
  const [showIntegrationOptions, setShowIntegrationOptions] = useState(false);
  const [showTestResult, setShowTestResult] = useState(false);
  const [integrationSuccess, setIntegrationSuccess] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const dummyScript = `<script>
  window.CHATBOT_CONFIG = {
    apiKey: 'your-api-key-here',
    position: 'bottom-right',
    theme: 'light'
  };
</script>
<script src="https://cdn.example.com/chatbot.js"></script>`;

  const handleTestChatbot = () => {
    setShowPreview(true);
  };

  const handleShowIntegrationOptions = () => {
    setShowIntegrationOptions(true);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(dummyScript);
  };

  const handleEmailInstructions = () => {
    // Simulate sending email
    setEmailSent(true);
    setTimeout(() => setEmailSent(false), 3000);
  };

  const handleTestIntegration = () => {
    // Simulate checking integration
    setShowTestResult(true);
    setTimeout(() => {
      setIntegrationSuccess(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    }, 2000);
  };

  const PreviewModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-4xl h-3/4 rounded-lg flex flex-col">
        <div className="bg-blue-600 text-white p-4 flex justify-between items-center rounded-t-lg">
          <span>🔔 Chatbot not working as intended? Share feedback</span>
          <button
            onClick={() => setShowPreview(false)}
            className="text-white hover:text-gray-200"
          >
            ×
          </button>
        </div>
        <div className="flex-1 bg-gray-100 p-4 relative">
          <iframe
            src="about:blank"
            className="w-full h-full bg-white rounded"
            title="Website Preview"
          />
          <div className="absolute bottom-4 right-4 bg-white rounded-lg shadow-lg p-4 w-72">
            <div className="text-sm font-medium mb-2">Chat Bot</div>
            <div className="border-t pt-2">
              <p className="text-gray-500 text-sm">How can I help you today?</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const IntegrationOptionsModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-2xl rounded-lg p-6">
        <h3 className="text-xl font-bold mb-4">Choose Integration Method</h3>
        <div className="space-y-6">
          <div className="border rounded-lg p-4">
            <h4 className="font-medium mb-2">Copy Integration Code</h4>
            <div className="bg-gray-50 p-4 rounded mb-2">
              <pre className="text-sm overflow-x-auto">{dummyScript}</pre>
            </div>
            <button
              onClick={handleCopyCode}
              className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
            >
              <ClipboardCopy className="w-4 h-4 mr-2" />
              Copy Code
            </button>
          </div>

          <div className="border rounded-lg p-4">
            <h4 className="font-medium mb-2">
              Email Instructions to Developer
            </h4>
            <button
              onClick={handleEmailInstructions}
              className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
            >
              <Mail className="w-4 h-4 mr-2" />
              {emailSent ? "Email Sent!" : "Send Instructions"}
            </button>
          </div>
        </div>
        <div className="mt-6 flex justify-end">
          <button
            onClick={() => setShowIntegrationOptions(false)}
            className="text-sm text-gray-500 hover:text-gray-700"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );

  const TestResultModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-2xl rounded-lg p-6 text-center">
        {!integrationSuccess ? (
          <div className="py-8">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Checking integration status...</p>
          </div>
        ) : (
          <div className="py-8">
            <PartyPopper className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-green-600 mb-6">
              Integration Successful!
            </h3>

            <div className="space-y-4">
              <button
                onClick={() => {}}
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 w-full justify-center"
              >
                <LayoutDashboard className="w-5 h-5 mr-2" />
                Explore Admin Panel
              </button>

              <button
                onClick={() => {}}
                className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 w-full justify-center"
              >
                <MessagesSquare className="w-5 h-5 mr-2" />
                Start talking to your chatbot
              </button>

              <div className="flex justify-center space-x-4 pt-4">
                <button
                  onClick={() => {}}
                  className="p-2 rounded-full bg-blue-100 hover:bg-blue-200"
                  title="Share on Twitter"
                >
                  <Share2 className="w-5 h-5 text-blue-600" />
                </button>
                <button
                  onClick={() => {}}
                  className="p-2 rounded-full bg-blue-100 hover:bg-blue-200"
                  title="Share on LinkedIn"
                >
                  <Share2 className="w-5 h-5 text-blue-600" />
                </button>
                <button
                  onClick={() => {}}
                  className="p-2 rounded-full bg-blue-100 hover:bg-blue-200"
                  title="Share on Facebook"
                >
                  <Share2 className="w-5 h-5 text-blue-600" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-6">
            Chatbot Integration & Testing
          </h2>

          <div className="space-y-6">
            <button
              onClick={handleTestChatbot}
              className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              <MessagesSquare className="w-5 h-5 mr-2" />
              Test Chatbot
            </button>

            <button
              onClick={handleShowIntegrationOptions}
              className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
            >
              <ClipboardCopy className="w-5 h-5 mr-2" />
              Integrate on your website
            </button>

            <button
              onClick={handleTestIntegration}
              className="w-full inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              Test Integration
            </button>
          </div>
        </div>
      </div>

      {showPreview && <PreviewModal />}
      {showIntegrationOptions && <IntegrationOptionsModal />}
      {showTestResult && <TestResultModal />}
    </div>
  );
};

export default ChatbotIntegration;
