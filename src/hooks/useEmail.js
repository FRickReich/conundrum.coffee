import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { query, where, getDocs, collection, addDoc } from "firebase/firestore";

import { db } from "../firebase";

export const useEmail = () => 
{
    const populateTemplate = (title, message) => `
    <!DOCTYPE html>
    <html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width,initial-scale=1">
            <meta name="x-apple-disable-message-reformatting">
            <title></title>
            <!--[if mso]>
        <noscript>
            <xml>
            <o:OfficeDocumentSettings>
                <o:PixelsPerInch>96</o:PixelsPerInch>
            </o:OfficeDocumentSettings>
            </xml>
        </noscript>
        <![endif]-->
            <style>
                table,
                td,
                div,
                h1,
                p {
                    font-family: Arial, sans-serif;
                }
            </style>
        </head>
        <body style="margin:0;padding:0;">
            <table role="presentation"
                style="width:100%;border-collapse:collapse;border:0;border-spacing:0;background:#ffffff;">
                <tr>
                    <td align="center" style="padding:0;">
                        <table role="presentation"
                            style="width:602px;border-collapse:collapse;border:1px solid #cccccc;border-spacing:0;text-align:left;">
                            <tr>
                                <td align="center" style="padding:40px 0 30px 0;background:#70bbd9;">
                                    <img src="https://assets.codepen.io/210284/h1.png" alt="" width="300"
                                        style="height:auto;display:block;" />
                                </td>
                            </tr>
                            <tr>
                                <td style="padding:36px 30px 42px 30px;">
                                    <table role="presentation"
                                        style="width:100%;border-collapse:collapse;border:0;border-spacing:0;">
                                        <tr>
                                            <td style="padding:0 0 36px 0;color:#153643;">
                                                <h1 style="font-size:24px;margin:0 0 20px 0;font-family:Arial,sans-serif;">
                                                    ${ title }
                                                </h1>
                                                <p style="margin:0 0 12px 0;font-size:16px;line-height:24px;font-family:Arial,sans-serif;">
                                                    ${ message }
                                                </p>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding:30px;background:#ee4c50;">
                                    <table role="presentation"
                                        style="width:100%;border-collapse:collapse;border:0;border-spacing:0;font-size:9px;font-family:Arial,sans-serif;">
                                        <tr>
                                            <td style="padding:0;width:50%;" align="left">
                                                <p
                                                    style="margin:0;font-size:14px;line-height:16px;font-family:Arial,sans-serif;color:#ffffff;">
                                                    &copy; Conundrum LLC, 2023<br />
                                                    <!-- <a href="http://www.example.com" style="color:#ffffff;text-decoration:underline;">Unsubscribe</a> -->
                                                </p>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </body>
    </html>
    `;

    const send = ({
        from = 'Your friends at conundrum <info@conundrum.coffee>',
        to = "", 
        subject = "DEFAULT SUBJECT", 
        title = "DEFAULT TITLE",
        body = "default message"
    }, 
    callback) =>
    {
        addDoc(collection(db, "mail"),
        {
            from,
            to,
            message: {
            subject,
            html: populateTemplate(title ? title : subject, body)
            // html: `
            //     <h1>${ title ? title : subject }</h1>
            //     <p>
            //         ${ body }
            //     </p>
            // `
        }}).then(data => {
            callback && callback({ success: true, data:
            {
                from,
                to,
                message: {
                    subject,
                    title,
                    body
                }
            } 
        });

        }).catch(err => callback && callback({ success: false, message: err.message}));
    }

    return {send};
}