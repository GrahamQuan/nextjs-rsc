import './global.css';

export const metadata = {
  title: 'NextGram',
  description:
    'A sample Next.js app showing dynamic routing with modals as a route.',
  metadataBase: new URL('https://nextgram.vercel.app'),
};

export default function RootLayout(props: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <main className='relative max-w-[820px] mx-auto'>
          {props.children}
          {props.modal}
          <div id='modal-root' />
        </main>
      </body>
    </html>
  );
}
