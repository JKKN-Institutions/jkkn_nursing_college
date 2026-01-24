import Link from "next/link";
import { siteData } from "@/data/siteData";
import { otherInstitutions } from "@/data/facilitiesData";

interface FooterProps {
  hideLifeAtJKKN?: boolean;
}

export default function Footer({ hideLifeAtJKKN = false }: FooterProps) {
  return (
    <footer className="bg-primary-dark text-white">
      {/* Life @ JKKN Description */}
      {!hideLifeAtJKKN && (
        <div className="bg-cream text-dark-text py-8">
          <div className="container-custom">
            <p className="text-center max-w-4xl mx-auto leading-relaxed">
              JKKN Educational Institutions is a vibrant residential campus that allows students to flourish both personally and professionally. Campus life at JKKN is not just about classrooms, libraries and labs. There are several opportunities for students to pursue their favorite activities, refine their skills and discover new talents and interests. The campus is a constant buzz of varied activities and events – academic, co-curricular and extracurricular.
            </p>
          </div>
        </div>
      )}

      {/* Main Footer */}
      <div className="py-12">
        <div className="container-custom grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              {siteData.institutionName}
            </h3>
            <p className="text-sm mb-4">{siteData.tagline}</p>
            <p className="text-sm mb-2">Multi-Disciplinary Campus</p>
          </div>

          {/* Our Institutions */}
          <div>
            <h3 className="text-xl font-bold mb-4">OUR INSTITUTIONS</h3>
            <ul className="space-y-2 text-sm">
              {otherInstitutions.map((inst, index) => (
                <li key={index}>
                  <Link href="#" className="hover:text-secondary transition-colors">
                    {inst.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-xl font-bold mb-4">CONTACT US</h3>
            <div className="space-y-3 text-sm">
              <p>
                <strong>Call:</strong> {siteData.contact.phone}
              </p>
              {siteData.contact.email && (
                <p>
                  <strong>Email:</strong> {siteData.contact.email}
                </p>
              )}
              <p>
                <strong>Address:</strong> {siteData.contact.address}
              </p>
            </div>

            {/* Social Media */}
            <div className="mt-6">
              <h4 className="font-bold mb-3">FOLLOW US</h4>
              <div className="flex gap-4">
                <a
                  href={siteData.socialMedia.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white text-primary-dark rounded flex items-center justify-center hover:bg-secondary transition-colors"
                >
                  F
                </a>
                <a
                  href={siteData.socialMedia.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white text-primary-dark rounded flex items-center justify-center hover:bg-secondary transition-colors"
                >
                  I
                </a>
                <a
                  href={siteData.socialMedia.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white text-primary-dark rounded flex items-center justify-center hover:bg-secondary transition-colors"
                >
                  in
                </a>
                <a
                  href={siteData.socialMedia.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white text-primary-dark rounded flex items-center justify-center hover:bg-secondary transition-colors"
                >
                  X
                </a>
                <a
                  href={siteData.socialMedia.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white text-primary-dark rounded flex items-center justify-center hover:bg-secondary transition-colors"
                >
                  Y
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/20 py-4">
        <div className="container-custom text-center text-sm">
          <p>© {new Date().getFullYear()} JKKN College of Nursing & Research. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
