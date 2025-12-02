import { useState } from 'react';
import Shadow from '@/components/hero/Shadow';
import Key from '@/components/hero/Key';
import Modal from '@/components/hero/Modal';

const KeyShadowSection = ({ onPickup, isUnlocked }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="relative flex flex-row justify-center items-center lg:ml-8 mr-16 gap-10 min-h-[50vh] mb-20 md:mt-20">
      {/* Shadow with modal trigger */}
      <div className="relative banner-sombra w-[120px] h-[120px] sm:w-[160px] sm:h-[160px] md:w-[180px] md:h-[180px] lg:w-[200px] lg:h-[200px] animate-float">
        <Shadow onClick={() => setShowModal(true)} />
      </div>

      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Kingdom Hearts and Me"
      />

      {/* Key container - removed all wrapper interactions */}
      <div className="relative banner-key w-[120px] h-[120px] sm:w-[160px] sm:h-[160px] md:w-[200px] md:h-[200px] lg:w-[230px] lg:h-[230px]">
        <Key onPickup={onPickup} isUnlocked={isUnlocked} />
      </div>
    </section>
  );
};

export default KeyShadowSection;
