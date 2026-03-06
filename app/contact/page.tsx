"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";

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

const sendEmail = (e:any) => {
e.preventDefault();

emailjs.send(
"service_xrvz4aw",
"template_vz1mvlb",
form,
"G-RqhhhPJxM97TKkS"
)
.then(() => {
alert("Enquiry sent successfully!");
})
.catch(() => {
alert("Failed to send enquiry.");
});
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
<p className="font-semibold">Address</p>
<p>
Killa No. 68/7/2 min, 8 min,<br/>
Jasaur Kheri Road, Rohad,<br/>
Haryana – 124501, India
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
src="https://www.google.com/maps?q=Jasaur%20Kheri%20Road%20Rohad%20Haryana&output=embed"
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