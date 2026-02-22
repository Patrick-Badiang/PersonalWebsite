import { Download, FileText } from 'lucide-react';

export function ResumeSection() {
  // In a real application, replace this with your actual PDF URL
  const resumePdfUrl = '/resume.pdf';

  return (
    <section id="resume" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">Resume</h2>
          <p className="text-gray-600 text-lg mb-8">
            View or download my resume to learn more about my experience and qualifications
          </p>
          
          {/* Download Button */}
          <a
            href={resumePdfUrl}
            download="John_Smith_Resume.pdf"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Download size={20} />
            <span>Download Resume</span>
          </a>
        </div>

        {/* PDF Viewer */}
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          {/* Placeholder for PDF - In production, use actual PDF */}
          <div className="w-full h-[800px] flex items-center justify-center bg-gray-100 border-2 border-dashed border-gray-300">
            <div className="text-center">
              <FileText size={64} className="mx-auto mb-4 text-gray-400" />
              <p className="text-gray-600 text-lg mb-2">Resume PDF Preview</p>
              <p className="text-gray-500 text-sm">
                Place your resume.pdf file in the public directory
              </p>
              <p className="text-gray-500 text-sm mt-4">
                You can use an iframe to embed the PDF:
              </p>
              <code className="text-xs bg-gray-200 px-2 py-1 rounded mt-2 inline-block">
                &lt;iframe src="/resume.pdf" /&gt;
              </code>
            </div>
          </div>
          
          {/* Uncomment below and comment out the placeholder above when you have a PDF */}
          {/* <iframe
            src={resumePdfUrl}
            className="w-full h-[800px] border-0"
            title="Resume PDF"
          /> */}
        </div>

        {/* Alternative: Link to external resume */}
        <div className="text-center mt-8">
          <p className="text-gray-600">
            Resume also available on{' '}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
