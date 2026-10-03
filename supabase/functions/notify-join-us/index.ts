import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

serve(async (req) => {
  const payload = await req.json()
  const record = payload.record

  const emailRes = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${Deno.env.get("RESEND_API_KEY")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Coram Deo Website <onboarding@resend.dev>",
      to: ["coramdeochurch1@gmail.com"],
      reply_to: record.email,
      subject: `New Join Us submission from ${record.name}`,
      html: `
        <h2>New Join Us Submission</h2>
        <p><strong>Name:</strong> ${record.name}</p>
        <p><strong>Email:</strong> ${record.email}</p>
        <p><strong>Phone:</strong> ${record.contact_number}</p>
        <p><strong>Age:</strong> ${record.age ?? "N/A"}</p>
        <p><strong>Preferred Service:</strong> ${record.ministry}</p>
        <p><strong>Involvement:</strong> ${record.involvement}</p>
        <p><strong>Message:</strong> ${record.message ?? "None"}</p>
      `,
    }),
  })

  const data = await emailRes.json()

  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  })
})