const About = () => {
  return (
    <div className="px-4 py-7">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold mb-8 text-center">About Us</h2>
        <div className="flex flex-col md:flex-row mb-12">
          <div className="md:w-1/2 pr-4 mb-4 md:mb-0">
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Team at work"
              className="rounded-lg"
            />
          </div>
          <div className="md:w-1/2">
            <p className="text-gray-700 mb-6">
              Welcome to our blog app! We are a passionate team dedicated to
              providing you with insightful and engaging content on a wide range
              of topics.
            </p>
            <p className="text-gray-700 mb-6">
              Our mission is to make your reading experience enjoyable and
              educational. Whether you're here for entertainment or seeking
              valuable information, we've got you covered.
            </p>
          </div>
        </div>

        <p className="text-gray-700 mb-6">
          Explore our blog to discover articles written by our talented team of
          writers. We cover topics such as technology, lifestyle, travel, and
          more. Each piece is crafted with care to provide you with a delightful
          and informative experience.
        </p>

        <div className="flex flex-col md:flex-row-reverse">
          <div className="md:w-1/2 pl-4 mb-4 md:mb-0">
            <img
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Books on a shelf"
              className="rounded-lg"
            />
          </div>
          <div className="md:w-1/2">
            <p className="text-gray-700 mb-6">
              We believe in the power of storytelling and aim to inspire,
              entertain, and enrich your life through our blog. Your feedback
              and engagement are essential to us, so feel free to share your
              thoughts and join the conversation.
            </p>
            <p className="text-gray-700">
              Thank you for being part of our community. We look forward to
              continuing this journey with you!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
