import { useState } from "react";
import { toast } from "react-toastify";

const ContactForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [queryType, setQueryType] = useState("");
  const [message, setMessage] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    const newMessage = {
      firstName,
      lastName,
      emailAddress,
      queryType,
      message,
    };
    sendMessageSubmit(newMessage);

    toast.success(
      "Message Sent! Thanks for completing the form, We'll be in touch soon!",
      { autoClose: 10000 }
    );
  };
  return (
    <section className="bg-[hsl(148,38%,91%)]">
      <div className="container m-auto max-w-3xl py-24">
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md  m-4 md:m-0">
          <form>
            <h2 className="text-3xl  font-semibold mb-6">Contact Us</h2>
            <div className="lg:flex lg:gap-4">
              <div className="mb-4 lg:w-1/2">
                <label className="block text-gray-700  mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="title"
                  className="border border-[hsl(186,15%,59%)] rounded w-full py-2 px-3 mb-2 hover:cursor-pointer hover:border-[hsl(169,82%,27%)]"
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="mb-4 lg:w-1/2">
                <label className="block text-gray-700  mb-2">Last Name *</label>
                <input
                  type="text"
                  id="lastName"
                  name="title"
                  className="border border-[hsl(186,15%,59%)] rounded w-full py-2 px-3 mb-2 hover:cursor-pointer hover:border-[hsl(169,82%,27%)]"
                  required
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>
            <div className="mb-4">
              <label for="contact_email" className="block text-gray-700  mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="contact_email"
                name="contact_email"
                className="border rounded w-full py-2 px-3  border-[hsl(186,15%,59%)]  mb-2 hover:cursor-pointer hover:border-[hsl(169,82%,27%)]"
                required
                value={emailAddress}
                onChange={(e) => setEmailAddress(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700  mb-2">Query Type*</label>
              <div className="flex flex-col gap-4 lg:flex-row lg:gap-4">
                <div className="border border-[hsl(186,15%,59%)] rounded-md p-2 gap-2 flex items-center  hover:cursor-pointer lg:w-1/2 lg:pl-4px">
                  <input
                    type="radio"
                    name="query-type"
                    id="general-enquiry"
                    value={queryType}
                    onChange={(e) => setQueryType(e.target.value)}
                  />
                  <label className=" text-gray-700">General Enquiry</label>
                </div>
                <div className="border border-[hsl(186,15%,59%)] rounded-md p-2 gap-2 flex items-center  hover:cursor-pointer lg:w-1/2 lg:pl-4px">
                  <input
                    type="radio"
                    name="query-type"
                    id="support-request"
                    value={queryType}
                    onChange={(e) => setQueryType(e.target.value)}
                   />
                  <label className=" text-gray-700">Support Request</label>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <label for="message" className="block text-gray-700  mb-2">
                Message
              </label>
              <textarea
                id="description"
                name="description"
                className="border border-[hsl(186,15%,59%)] rounded w-full py-2 px-3"
                rows="4"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <div className="flex gap-4 mb-4">
              <input type="checkbox" name="" id="" />
              <label className=" text-gray-700">
                I consent to being contacted by the team *
              </label>
            </div>
            <div>
              <button
                className="bg-[hsl(169,82%,27%)] hover:bg-[hsl(187,24%,22%)] text-white font-bold py-2 px-4 rounded-md w-full focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
