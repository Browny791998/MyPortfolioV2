'use client'; 
import React,{useState, ChangeEvent, FormEvent} from 'react'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
import Image from 'next/image'
function Contact() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const handleSubmit = async (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    if (data.success) {
      setStatus('Email sent successfully!');
    } else {
      setStatus('Failed to send email.');
    }

    setFormData({ name: '', email: '', message: '' });
  };
  
  return (
    <section className="container mx-auto pb-12 px-8" id="contact">
      <div className="grid sm:grid-cols-1 grid-cols-2 gap-8 items-center">
        <div className=" md:h-full">
          <Image
            src="/images/astronout.gif"
            alt="Contact visual"
            width={150}
            height={150}
            className="rounded-lg object-cover w-full h-full"
          />
          
        </div>
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold">Get in Touch</h2>
            <p className="text-gray-500 dark:text-gray-400">
              I'd love to hear from you. Fill out the form below and I'll get back to you as soon as possible.
            </p>
          </div>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Your name" value={formData.name}  onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" value={formData.email}      onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="Your email" type="email" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
              value={formData.message}
                id="message"
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}

                placeholder="Your message"
                required
                className="min-h-[150px]"
              />
            </div>
            <Button type="submit"   className="w-full shadow-sm border-2 border-black dark:border-white bg-white dark:bg-black text-black dark:text-white hover:bg-[#BE185D] hover:text-white dark:hover:bg-gray-800"
            >Send Message</Button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact