import { jsPDF } from 'jspdf';
import { personalInfo, experience, education, skills, certifications, projects } from './data';

export function generateCV() {
  const doc = new jsPDF({ unit: 'mm', format: 'a4' });
  const pageWidth = 210;
  const margin = 18;
  const contentWidth = pageWidth - margin * 2;
  let y = 18;

  const colors = {
    black: [30, 30, 30],
    dark: [50, 50, 50],
    gray: [100, 100, 100],
    light: [140, 140, 140],
    accent: [45, 80, 140],
    line: [200, 200, 200],
  };

  function checkPage(needed = 12) {
    if (y + needed > 280) {
      doc.addPage();
      y = 18;
    }
  }

  function drawLine() {
    doc.setDrawColor(...colors.line);
    doc.setLineWidth(0.3);
    doc.line(margin, y, pageWidth - margin, y);
    y += 4;
  }

  function sectionTitle(title) {
    checkPage(14);
    y += 3;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.setTextColor(...colors.accent);
    doc.text(title.toUpperCase(), margin, y);
    y += 2;
    drawLine();
  }

  function wrappedText(text, x, maxWidth, fontSize, style, color) {
    doc.setFont('helvetica', style);
    doc.setFontSize(fontSize);
    doc.setTextColor(...color);
    const lines = doc.splitTextToSize(text, maxWidth);
    lines.forEach((line) => {
      checkPage(5);
      doc.text(line, x, y);
      y += fontSize * 0.45;
    });
  }

  // ─── HEADER ───
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(22);
  doc.setTextColor(...colors.black);
  doc.text(personalInfo.name.toUpperCase(), margin, y);
  y += 8;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(11);
  doc.setTextColor(...colors.accent);
  doc.text(personalInfo.title, margin, y);
  y += 7;

  doc.setFontSize(9);
  doc.setTextColor(...colors.gray);
  const contactLine = [
    personalInfo.email,
    personalInfo.phone,
    personalInfo.location,
    'linkedin.com/in/kaveesh-senevirathne',
    'github.com/KHSenevirathne',
  ].join('  |  ');
  const contactLines = doc.splitTextToSize(contactLine, contentWidth);
  contactLines.forEach((line) => {
    doc.text(line, margin, y);
    y += 4;
  });
  y += 1;
  drawLine();

  // ─── PROFESSIONAL SUMMARY ───
  sectionTitle('Professional Summary');
  const summary =
    'Results-driven Software Engineer with 4+ years of experience building scalable web applications, cloud microservices, and AI-integrated solutions. Proven track record delivering high-impact projects serving millions of users, including national-scale news platforms, live-streaming systems, and real-time election coverage. Proficient across the full stack with expertise in Java, JavaScript/TypeScript, Spring Boot, React, Next.js, and AWS. Experienced with AI/ML tools and modern development workflows.';
  wrappedText(summary, margin, contentWidth, 9.5, 'normal', colors.dark);
  y += 2;

  // ─── EXPERIENCE ───
  sectionTitle('Professional Experience');
  experience.forEach((job) => {
    checkPage(22);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10.5);
    doc.setTextColor(...colors.black);
    doc.text(job.role, margin, y);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(...colors.light);
    doc.text(job.period, pageWidth - margin, y, { align: 'right' });
    y += 4.5;

    doc.setFont('helvetica', 'italic');
    doc.setFontSize(9.5);
    doc.setTextColor(...colors.gray);
    doc.text(`${job.company}  ·  ${job.location}  ·  ${job.type}`, margin, y);
    y += 5;

    job.description.forEach((desc) => {
      checkPage(6);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(9);
      doc.setTextColor(...colors.dark);
      const bulletLines = doc.splitTextToSize(desc, contentWidth - 5);
      bulletLines.forEach((line, i) => {
        checkPage(5);
        if (i === 0) {
          doc.text('•', margin + 1, y);
        }
        doc.text(line, margin + 5, y);
        y += 3.8;
      });
    });

    // Tech tags as comma-separated text
    doc.setFont('helvetica', 'italic');
    doc.setFontSize(8.5);
    doc.setTextColor(...colors.light);
    const techText = 'Technologies: ' + job.tech.join(', ');
    const techLines = doc.splitTextToSize(techText, contentWidth);
    techLines.forEach((line) => {
      checkPage(5);
      doc.text(line, margin, y);
      y += 3.5;
    });
    y += 3;
  });

  // ─── KEY PROJECTS ───
  sectionTitle('Key Projects');
  const keyProjects = projects.slice(0, 6);
  keyProjects.forEach((proj) => {
    checkPage(12);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(...colors.black);
    doc.text(proj.title, margin, y);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(...colors.light);
    doc.text(proj.client, pageWidth - margin, y, { align: 'right' });
    y += 4;

    wrappedText(proj.description, margin, contentWidth, 9, 'normal', colors.dark);

    doc.setFont('helvetica', 'italic');
    doc.setFontSize(8.5);
    doc.setTextColor(...colors.light);
    const projTech = 'Tech: ' + proj.tech.join(', ');
    doc.text(doc.splitTextToSize(projTech, contentWidth).join(' '), margin, y);
    y += 5;
  });

  // ─── SKILLS ───
  sectionTitle('Technical Skills');
  const skillSections = [
    { label: 'Languages', value: skills.languages.map((l) => l.name).join(', ') },
    { label: 'Frameworks & Libraries', value: skills.frameworks.join(', ') },
    { label: 'AI & Machine Learning', value: skills.ai.join(', ') },
    { label: 'DevOps & Cloud', value: skills.devops.join(', ') },
    { label: 'Databases', value: skills.databases.join(', ') },
    { label: 'Tools & Platforms', value: skills.tools.join(', ') },
    { label: 'IDEs', value: skills.ides.join(', ') },
    { label: 'Operating Systems', value: skills.os.join(', ') },
  ];

  skillSections.forEach(({ label, value }) => {
    checkPage(8);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(...colors.black);
    doc.text(label + ':', margin, y);
    const labelWidth = doc.getTextWidth(label + ':  ');

    doc.setFont('helvetica', 'normal');
    doc.setTextColor(...colors.dark);
    const valueLines = doc.splitTextToSize(value, contentWidth - labelWidth);
    valueLines.forEach((line, i) => {
      checkPage(5);
      doc.text(line, margin + labelWidth, y);
      y += 3.8;
    });
    y += 1;
  });

  // ─── EDUCATION ───
  sectionTitle('Education');
  education.forEach((edu) => {
    checkPage(12);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(...colors.black);
    doc.text(edu.degree, margin, y);
    y += 4.5;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(...colors.gray);
    doc.text(`${edu.institution}  ·  ${edu.location}`, margin, y);

    doc.setTextColor(...colors.light);
    doc.text(edu.period, pageWidth - margin, y, { align: 'right' });
    y += 5;
  });

  // ─── CERTIFICATIONS ───
  sectionTitle('Certifications');
  certifications.forEach((cert) => {
    checkPage(6);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9.5);
    doc.setTextColor(...colors.dark);
    doc.text('•  ' + cert.name, margin, y);
    y += 4.5;
  });

  // ─── SAVE ───
  doc.save('Kaveesh_Senevirathne_CV.pdf');
}
