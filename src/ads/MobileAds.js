

import { useEffect } from 'react';

export default function MobileAds() {
    useEffect(() => {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    }, [])

    return < div>
              <ins className="adsbygoogle" style={{display: 'block'}} data-ad-client="ca-pub-3502028008615885" data-ad-slot={8906542176} data-ad-format="auto" data-full-width-responsive="true" />
    </div>
}

