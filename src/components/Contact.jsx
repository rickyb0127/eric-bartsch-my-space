import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Contact() {
  return (
    <div className="border-[2px] border-main-blue">
      <div className="bg-main-blue py-[1px] text-white font-bold">
        <span className="pl-[15px]">Contacting Eric</span>
      </div>
      <div className="flex flex-row justify-between p-[10px]">
        <div>
          <a href="mailto:bartschED@gmail.com">
            <FontAwesomeIcon className="pr-[14px]" icon="fa-solid fa-envelope" />
            <span className="text-dark-blue font-bold">Send Message</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact;