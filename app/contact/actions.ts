'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail(formData: FormData) {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const phone = formData.get('phone') as string
  const insuranceType = formData.get('insuranceType') as string
  const message = formData.get('message') as string

  if (!name || !email || !message) {
    return { error: 'Veuillez remplir tous les champs obligatoires.' }
  }

  try {
    const { data, error } = await resend.emails.send({
      from: 'Lynxia Assur Conseil <onboarding@resend.dev>', // Use a verified domain in production
      to: ['pro.elkhaldi@gmail.com'],
      subject: `Nouveau devis : ${insuranceType} - ${name}`,
      text: `
        Nom: ${name}
        Email: ${email}
        Téléphone: ${phone}
        Type d'assurance: ${insuranceType}
        Message: ${message}
      `,
      replyTo: email,
    })

    if (error) {
      console.error('Resend error:', error)
      return { error: 'Une erreur est survenue lors de l\'envoi du message.' }
    }

    return { success: true }
  } catch (err) {
    console.error('Email sending error:', err)
    return { error: 'Une erreur est survenue lors de l\'envoi du message.' }
  }
}
