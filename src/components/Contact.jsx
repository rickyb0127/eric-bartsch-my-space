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
          <div>
            <FontAwesomeIcon className="pr-[10px]" icon="fa-solid fa-user-plus" />
            <span className="text-dark-blue font-bold">Add to Friends</span>
          </div>
          <div>
            <FontAwesomeIcon className="pr-[10px]" icon="fa-solid fa-user-pen" />
            <span className="text-dark-blue font-bold">Instant Message</span>
          </div>
          <div>
            <FontAwesomeIcon className="pr-[10px]" icon="fa-solid fa-user-group" />
            <span className="text-dark-blue font-bold">Add to Group</span>
          </div>
        </div>
        <div>
          <div>
            <FontAwesomeIcon className="pr-[12px]" icon="fa-solid fa-share" />
            <span className="text-dark-blue font-bold">Forward to Friend</span>
          </div>
          <div>
            <FontAwesomeIcon className="pr-[10px]" icon="fa-solid fa-star" />
            <span className="text-dark-blue font-bold">Add to Favorites</span>
          </div>
          <div>
            <FontAwesomeIcon className="pr-[10px]" icon="fa-solid fa-user-slash" />
            <span className="text-dark-blue font-bold">Block User</span>
          </div>
          <div>
            <FontAwesomeIcon className="pl-[5px] pr-[18px]" icon="fa-solid fa-up-down" />
            <span className="text-dark-blue font-bold">Rank User</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;