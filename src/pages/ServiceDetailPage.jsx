import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { servicesData } from '@/data/servicesData';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Check } from 'lucide-react';
import { Helmet } from 'react-helmet';

const ServiceDetailPage = () => {
  const { serviceId } = useParams();
  const service = servicesData.find(s => s.id === serviceId);

  if (!service) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-3xl font-bold">Service not found</h1>
        <p className="mt-4">The service you are looking for does not exist.</p>
        <Link to="/">
            <Button className="mt-8">
                <ArrowLeft className="mr-2 h-4 w-4" /> Go Back to Home
            </Button>
        </Link>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{service.title} - Infynix Solutions</title>
        <meta name="description" content={service.longDescription} />
        <meta property="og:title" content={`${service.title} - Infynix Solutions`} />
        <meta property="og:description" content={service.longDescription} />
      </Helmet>
      <div className="bg-gray-50">
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16"
        >
            <Link to="/#services" className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors mb-4">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Services
            </Link>
            <div className="relative isolate">
                <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
                    <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#80caff] to-[#4f46e5] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'}}></div>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <service.icon className="h-12 w-12 text-blue-600 mb-4" />
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">{service.title}</h1>
                    <p className="mt-6 text-lg leading-8 text-gray-600">{service.longDescription}</p>
                </motion.div>
            </div>
        </motion.div>
      </div>
      <div className="bg-white py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 text-center">What's Included?</h2>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {service.details.map((detail, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex items-start"
                    >
                        <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                            <Check className="h-6 w-6 text-blue-600" />
                        </div>
                        <div className="ml-4">
                            <h3 className="text-lg font-medium leading-6 text-gray-900">{detail.title}</h3>
                            <p className="mt-2 text-base text-gray-500">{detail.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetailPage;