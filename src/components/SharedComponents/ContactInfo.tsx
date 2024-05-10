interface ContactInfoProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ icon, title, description }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="bg-custom-main p-3 text-xl rounded-full relative top-0">
        {icon}
      </div>
      <div className="text-lg font-medium tracking-wide font-source-code-pro text-custom-gray-300 pl-5">
        <p className="mb-2">{title}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ContactInfo;
