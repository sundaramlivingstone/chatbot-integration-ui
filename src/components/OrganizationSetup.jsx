import React, { useState, useEffect } from "react";
import {
  ChevronRight,
  Globe,
  Check,
  Clock,
  AlertCircle,
  ChevronDown,
  ChevronUp,
  ExternalLink,
} from "lucide-react";

const OrganizationSetup = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    websiteUrl: "",
    description: "",
  });
  const [metaDescription, setMetaDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedPage, setSelectedPage] = useState(null);

  const [scrapedPages, setScrapedPages] = useState([
    {
      url: "/about",
      status: "completed",
      lastScraped: "2024-01-30T10:00:00",
      chunks: [
        "Our company was founded in 2010 with a mission to revolutionize AI.",
        "We have offices in New York, London, and Tokyo.",
        "Our team consists of over 200 experts in machine learning and AI.",
      ],
    },
    {
      url: "/products",
      status: "completed",
      lastScraped: "2024-01-30T11:00:00",
      chunks: [
        "Our flagship product uses advanced natural language processing.",
        "We offer solutions for both enterprise and small businesses.",
      ],
    },
    {
      url: "/contact",
      status: "pending",
      lastScraped: null,
      chunks: [],
    },
    {
      url: "/blog",
      status: "failed",
      lastScraped: "2024-01-30T09:00:00",
      chunks: [],
    },
  ]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const fetchMetaDescription = async () => {
    if (!formData.websiteUrl) return;

    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setMetaDescription(
        "A leading provider of AI-powered customer service solutions. We help businesses automate their support with advanced chatbots."
      );
    } catch (error) {
      console.error("Error fetching meta description:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "text-green-500";
      case "pending":
        return "text-yellow-500";
      case "failed":
        return "text-red-500";
      default:
        return "text-gray-500";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "completed":
        return <Check className="w-5 h-5 text-green-500" />;
      case "pending":
        return <Clock className="w-5 h-5 text-yellow-500" />;
      case "failed":
        return <AlertCircle className="w-5 h-5 text-red-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[var(--custom-bg-color)] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white shadow rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-bold mb-6">Setup Organization</h2>

          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Company Name
                </label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Website URL
                </label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <input
                    type="url"
                    name="websiteUrl"
                    value={formData.websiteUrl}
                    onChange={handleInputChange}
                    className="flex-1 block w-full px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                  <button
                    type="button"
                    onClick={fetchMetaDescription}
                    disabled={isLoading}
                    className="inline-flex items-center px-4 py-2 border border-l-0 border-gray-300 rounded-r-md bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  >
                    <Globe className="w-5 h-5 text-gray-400" />
                    <span className="ml-2">Fetch</span>
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Company Description
                </label>
                <textarea
                  name="description"
                  value={formData.description || metaDescription}
                  onChange={handleInputChange}
                  rows={4}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
                {metaDescription && (
                  <p className="mt-2 text-sm text-gray-500">
                    ✨ Description fetched from website meta tags
                  </p>
                )}
              </div>
            </div>
          </form>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">
            Website Scraping Status
          </h3>
          <div className="space-y-4">
            {scrapedPages.map((page) => (
              <div key={page.url} className="border rounded-lg">
                <div
                  className="p-4 flex items-center justify-between cursor-pointer hover:bg-gray-50"
                  onClick={() =>
                    setSelectedPage(selectedPage === page.url ? null : page.url)
                  }
                >
                  <div className="flex items-center space-x-4">
                    {getStatusIcon(page.status)}
                    <span className="font-medium">{page.url}</span>
                    <span className={`text-sm ${getStatusColor(page.status)}`}>
                      {page.status.charAt(0).toUpperCase() +
                        page.status.slice(1)}
                    </span>
                  </div>
                  {selectedPage === page.url ? (
                    <ChevronUp className="w-5 h-5 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </div>

                {selectedPage === page.url && page.chunks.length > 0 && (
                  <div className="p-4 border-t bg-gray-50">
                    <h4 className="font-medium mb-2">Scraped Content:</h4>
                    <div className="space-y-2">
                      {page.chunks.map((chunk, index) => (
                        <div
                          key={index}
                          className="p-2 bg-white rounded border"
                        >
                          {chunk}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-between">
            <div className="text-sm text-gray-500">
              {scrapedPages.filter((p) => p.status === "completed").length} of{" "}
              {scrapedPages.length} pages scraped
            </div>
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              onClick={() => console.log("Continue to next step")}
            >
              Continue Setup
              <ChevronRight className="ml-2 w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganizationSetup;
