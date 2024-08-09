import {NextRequest, NextResponse} from "next/server";
import {prisma} from "@/prisma/prisma-client";

export async function GET () {
  // Не нужно делать запрос типа SQL
  // SELECT * FROM users WHERE email = 'жопа'
  const users = await prisma.user.findMany()
  return NextResponse.json(users)
}

export async function POST (request: NextRequest) {
  const body = await request.json()
  const user = await prisma.user.create({
    data: body
  })
  return NextResponse.json(user)
}

// export async function POST () {
//   const user = await prisma.user.create({
//     data: {
//       fullName: 'Sanya',
//       email: 'Sanya@gmail.com',
//       password: '123'
//     }
//   })
//   return NextResponse.json(user)
// }