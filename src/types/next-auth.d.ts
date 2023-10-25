/* eslint-disable no-unused-vars */
import 'next-auth'

declare module 'next-auth' {
  interface Session {
    user: {
        firstName: string;
        legalName: string;
        lastName: string;
        phone: string;
        email: string;
        token: string;
    };
  }
}
