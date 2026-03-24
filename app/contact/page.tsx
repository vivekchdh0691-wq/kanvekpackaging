"use client";
import { useState } from "react";
let emailjs;

const loadEmailJS = async () => {
  if (!emailjs) {
    emailjs = await import("@emailjs/browser");
  }
  return emailjs;
};
export default function ContactPage() {

const [form, setForm] = useState({
name: "",
email: "",
phone: "",
message: ""
});

const handleChange = (e:any) => {
setForm({...form, [e.target.name]: e.target.value});
};

const sendEmail = async (e:any) => {
  e.preventDefault();

  try {
    const emailjsLib = await loadEmailJS();

    await emailjsLib.default.send(
      "service_xrvz4aw",
      "template_vz1mvlb",
      form,
      "G-RqhhhPJxM97TKkS"
    );

    alert("Enquiry sent successfully!");
  } catch (error) {
    console.error(error);
    alert("Failed to send enquiry.");
  }
};

return (

<main className="max-w-7xl mx-auto px-6 py-24">

<h1 className="text-4xl font-bold text-center mb-16">
Contact Us
</h1>

<div className="grid md:grid-cols-2 gap-16">

{/* LEFT SIDE */}

<div className="space-y-10">

<div className="bg-green-50 p-8 rounded-2xl">

<h2 className="text-2xl font-bold mb-6">
Contact Information
</h2>

<div className="space-y-6 text-gray-700">

<div>
<p className="font-semibold">Phone</p>
<a href="tel:+917011372679" className="text-green-700 hover:underline">
+91 7011372679
</a>
</div>

<div>
<p className="font-semibold">Email</p>
<a
href="mailto:business@kanvekpackaging.com"
className="text-green-700 hover:underline"
>
business@kanvekpackaging.com
</a>
</div>

<div>
<p className="font-semibold">Head-Office Address</p>
<p>
Plot No. 407, KH No. 15/6,<br/>
Kakrola Housing Complex, New Delhi,<br/>
Delhi – 110078, India
</p>
</div>

</div>

</div>


<div className="bg-green-800 text-white p-8 rounded-2xl">

<h3 className="text-2xl font-semibold mb-6">
Why Choose Kanvek?
</h3>

<ul className="space-y-4">

<li>✔ Premium quality water-activated tapes</li>
<li>✔ Competitive pricing for bulk orders</li>
<li>✔ Reliable delivery across India</li>
<li>✔ Expert packaging consultation</li>

</ul>

</div>

</div>



{/* RIGHT SIDE FORM */}

<form onSubmit={sendEmail} className="space-y-6">

<input
type="text"
name="name"
placeholder="Your Name"
onChange={handleChange}
className="w-full border rounded-lg px-4 py-3"
/>

<input
type="email"
name="email"
placeholder="Email"
onChange={handleChange}
className="w-full border rounded-lg px-4 py-3"
/>

<input
type="text"
name="phone"
placeholder="Phone Number"
onChange={handleChange}
className="w-full border rounded-lg px-4 py-3"
/>

<textarea
name="message"
placeholder="Message"
onChange={handleChange}
className="w-full border rounded-lg px-4 py-3 h-32"
/>

<button
type="submit"
className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800"
>
Send Enquiry
</button>

</form>

</div>

<div className="mt-16 rounded-2xl overflow-hidden shadow">

<iframe 
src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d218.90118323519619!2d77.02795735637936!3d28.617203811065167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d054605bffd5f%3A0x6d6a7705ebbace09!2sManoj%20R%20Kumar%20%26%20Co.!5e0!3m2!1sen!2sin!4v1774346890009!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
width="100%"
height="350"
style={{ border: 0 }}
loading="lazy"
referrerPolicy="no-referrer-when-downgrade"
/>

</div>


</main>

);
}
