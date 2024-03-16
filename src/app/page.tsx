import ContactUs from '@/components/contact-us';

const Home = () => {
  return (
    <div className="h-screen max-w-2xl mx-auto flex justify-center items-center">
      <div className="grid grid-cols-2 gap-4 p-4 bg-white shadow-md rounded-md border border-purple-100">
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold">Contact Us</h1>
          <img
            className="rounded-md object-fill h-48 w-full"
            src="https://picsum.photos/seed/picsum/200/300"
            alt="contact us"
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            maxime natus consectetur quisquam, eius odio totam. Odio vitae
            maxime, officiis iure recusandae beatae perspiciatis corrupti
            mollitia cumque quod numquam distinctio?
          </p>
        </div>

        <ContactUs />
      </div>
    </div>
  );
};

export default Home;
