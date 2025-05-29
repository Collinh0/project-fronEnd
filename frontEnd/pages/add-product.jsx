import { z } from 'zod';
import { useState } from 'react';
import useForm from '@/hooks/useForm';
import { useRouter } from 'next/router';

const smokeSignal = z.object({
    name: z.string().min(1, 'Name is required'),
    description: z.string().min(1, 'Description is required')
}); //add to README