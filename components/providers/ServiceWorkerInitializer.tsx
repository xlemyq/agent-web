'use client';

import { useEffect } from 'react';

const SERVICE_WORKER_PATH = '/sw.js';

export function ServiceWorkerInitializer() {
  useEffect(() => {
    if (typeof window === 'undefined' || !('serviceWorker' in navigator)) {
      return undefined;
    }

    let isMounted = true;

    const register = async () => {
      if (process.env.NODE_ENV !== 'production') {
        return;
      }

      const registration = await navigator.serviceWorker.register(SERVICE_WORKER_PATH, { scope: '/' });

      if (!isMounted) {
        return;
      }

      if (registration.waiting) {
        registration.waiting.postMessage({ type: 'SKIP_WAITING' });
      }
    };

    register().catch(() => undefined);

    if (!navigator.onLine) {
      document.documentElement.classList.add('offline');
    }

    const onControllerChange = () => {
      document.documentElement.classList.remove('offline');
    };

    const onOffline = () => {
      document.documentElement.classList.add('offline');
    };

    const onOnline = () => {
      document.documentElement.classList.remove('offline');
    };

    navigator.serviceWorker.addEventListener('controllerchange', onControllerChange);
    window.addEventListener('offline', onOffline);
    window.addEventListener('online', onOnline);

    return () => {
      isMounted = false;
      navigator.serviceWorker.removeEventListener('controllerchange', onControllerChange);
      window.removeEventListener('offline', onOffline);
      window.removeEventListener('online', onOnline);
    };
  }, []);

  return null;
}
