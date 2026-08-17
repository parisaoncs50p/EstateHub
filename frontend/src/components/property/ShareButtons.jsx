
import {
  WhatsappShareButton,
  TelegramShareButton,
} from "react-share";

import {
  WhatsappIcon,
  TelegramIcon,
} from "react-share";

import { Copy } from "lucide-react";

function ShareButtons({ property }) {
  const url = window.location.href;

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      alert("لینک آگهی کپی شد.");
    } catch {
      alert("امکان کپی لینک وجود ندارد.");
    }
  };

  return (
    <div className="flex items-center gap-3">

      <WhatsappShareButton
        url={url}
        title={property.title}
      >
        <WhatsappIcon
          size={42}
          round
        />
      </WhatsappShareButton>

      <TelegramShareButton
        url={url}
        title={property.title}
      >
        <TelegramIcon
          size={42}
          round
        />
      </TelegramShareButton>

      <button
        onClick={copyLink}
        className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-slate-900 text-white transition hover:bg-amber-500"
      >
        <Copy size={18} />
      </button>

    </div>
  );
}

export default ShareButtons;