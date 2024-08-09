import { useState, useEffect } from 'react';

interface Props {
    title: string;
    description: string;
    email: string;
    firstName: string;
    lastName: string;
}

function usePostPayment(props : Props) {
    const { email, description,firstName, lastName,title } = props;
    const [result, setResult] = useState<any>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [makePayment, setMakePayment] = useState(false);
    const url = 'https://sandbox.dev.business.mamopay.com/manage_api/v1/links';
    useEffect(() => {
        const abortController = new AbortController();
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(url, 
                    { 
                        method: 'POST',
                        headers: {
                            accept: 'application/json',
                            'Content-Type': 'application/json',
                            Authorization: 'sk-a83af377-2fd5-4991-8202-e74801df8d98'
                        },
                        body: JSON.stringify({
                            title: title,
                            description: description,
                            // active: true,
                            return_url: 'https://myawesomewebsite.com/paymentSuccess',
                            failure_return_url: 'https://failureurl.com/paymentFailure',
                            // processing_fee_percentage: 3,
                            // amount: 119.99,
                            // amount_currency: 'AED',
                            link_type: 'inline',
                            email: email,
                            first_name: firstName,
                            lastName: lastName
                        }),
                        signal: abortController.signal,
                        
                    }
                );
                if (response.ok) {
                    const data = await response.json();
                    setResult(data);
                } else {
                    throw new Error('Error fetching data');
                }
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
                setMakePayment(false);
            }
        };
        fetchData();
        return () => {
            abortController.abort();
        }
    }, [makePayment]);
  
    return { result, loading, error, setMakePayment };
  }

export default usePostPayment;