"use client";

import {
  Home,
  Newspaper,
  FileText,
  Moon,
  Radio,
  Play,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
  Phone,
  Mail,
  Clock,
  Globe,
  MapPin,
  Facebook,
  Instagram,
  AlertCircle,
  Shield,
  Flame,
  HeartPulse,
  ArrowRight,
} from "lucide-react";
import { motion } from "motion/react";
import React, { useState, ReactNode } from "react";

export default function V1() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(80);

  return (
    <div className="min-h-screen pb-24 md:pb-0 md:pt-8 flex flex-col items-center">
      {/* Main Container */}
      <main className="w-full max-w-md mx-auto px-6 space-y-8">
        {/* Header / Logo */}
        <header className="flex flex-col items-center pt-8 space-y-4">
          <div className="w-58 h-58 bg-[#F8F9F8] rounded-2xl flex items-center justify-center p-8">
            <img
              src="logo.png"
              alt="Comuna de Oliveros"
              className="w-full h-auto object-contain opacity-80"
              onError={(e) => {
                // Fallback if logo fails to load
                (e.target as HTMLImageElement).src =
                  "https://picsum.photos/seed/oliveros/200/200";
              }}
            />
          </div>
          {/* <h2 className="text-[#8E9299] font-semibold tracking-[0.2em] text-xs uppercase">
            Portal Institucional
          </h2> */}
        </header>

        {/* Radio Player Card */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-[2rem] p-6 shadow-sm space-y-6"
        >
          <div className="flex items-center gap-4">
            {/* <div className="w-12 h-12 bg-[#E8F0FE] rounded-xl flex items-center justify-center text-[#3B82F6]">
              <Radio size={24} />
            </div> */}
            <div>
              <h3 className="font-bold text-lg">Reproduce el Audio</h3>
              {/* <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-xs font-medium text-green-600 uppercase tracking-wider">
                  En Vivo
                </span>
              </div> */}
            </div>
          </div>

          <audio
            className="mx-auto w-full"
            src="/audios/oliveros.mp3"
            controls
          ></audio>
        </motion.section>

        {/* Emergency Numbers */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-red-500 text-xl font-bold">*</span>
            <h3 className="font-bold text-[#1A1A1A]">Números de Emergencia</h3>
          </div>
          <div className="space-y-4">
            <div className="flex flex-col gap-4">
              <a
                href="tel:03476498250"
                className="bg-white dark:bg-slate-800 border-2 border-red-600 dark:border-red-500 rounded-3xl p-4 flex items-center shadow-lg"
              >
                <div className="bg-red-600 text-white p-3 rounded-2xl mr-4">
                  <Shield size={24} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold uppercase text-slate-500 dark:text-slate-400 tracking-wider">
                    Monitoreo
                  </p>
                  <p className="text-2xl font-black text-slate-900 dark:text-white truncate">
                    03476 563296
                  </p>
                </div>
                <Phone size={24} />
              </a>

              <a
                href="tel:03476498088"
                className="bg-white dark:bg-slate-800 border-2 border-green-600 dark:border-green-500 rounded-3xl p-4 flex items-center shadow-lg"
              >
                <div className="bg-green-600 text-white p-3 rounded-2xl mr-4">
                  <HeartPulse size={24} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold uppercase text-slate-500 dark:text-slate-400 tracking-wider">
                    Salud
                  </p>
                  <p className="text-2xl font-black text-slate-900 dark:text-white truncate">
                    03476 563307
                  </p>
                </div>
                <Phone size={24} />
              </a>

              <a
                href="tel:03476498900"
                className="bg-white dark:bg-slate-800 border-2 border-orange-600 dark:border-orange-500 rounded-3xl p-4 flex items-center shadow-lg"
              >
                <div className="bg-orange-600 text-white p-3 rounded-2xl mr-4">
                  <Flame size={24} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold uppercase text-slate-500 dark:text-slate-400 tracking-wider">
                    Bomberos
                  </p>
                  <p className="text-2xl font-black text-slate-900 dark:text-white truncate">
                    03476 498900
                  </p>
                </div>
                <Phone size={24} />
              </a>
            </div>
          </div>
        </section>

        {/* Interest Links */}
        <section className="space-y-4">
          <h3 className="font-bold text-[#1A1A1A]">Enlaces de Interés</h3>
          <div className="grid grid-cols-2 gap-4">
            <LinkCard
              icon={<Globe size={24} className="text-blue-500" />}
              label="Web Oficial"
              href="https://oliveros.miportal.ar/"
            />
            <LinkCard
              icon={<MapPin size={24} className="text-green-500" />}
              label="Ubicación"
              href="https://maps.app.goo.gl/zxjbGc6wv2PERETd6"
            />
            <LinkCard
              icon={<Facebook size={24} className="text-blue-600" />}
              label="Facebook"
              href="https://www.facebook.com/comunadeoliveros/"
            />
            <LinkCard
              icon={<Instagram size={24} className="text-pink-500" />}
              label="Instagram"
              href="https://www.instagram.com/comunadeoliveros/?hl=es"
            />
          </div>
        </section>

        {/* Contact Section */}
        {/* <section className="bg-[#0F172A] rounded-[2rem] p-8 text-white space-y-6">
          <h3 className="text-xl font-bold">Contacto</h3>
          <div className="space-y-4">
            <ContactItem icon={<Phone size={18} />} text="+54 3476 498165" />
            <ContactItem
              icon={<Mail size={18} />}
              text="tasa.comunadeoliveros@gmail.com"
            />
            <ContactItem
              icon={<Clock size={18} />}
              text="Lunes a Viernes 07:00 - 13:00"
            />
          </div>
          <button className="w-full bg-white text-[#0F172A] font-bold py-4 rounded-2xl hover:bg-gray-100 transition-colors">
            Enviar un mensaje
          </button>
        </section> */}
      </main>

      {/* Bottom Navigation */}
      {/* <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-6 py-4 flex justify-between items-center md:hidden">
        <NavItem icon={<Home size={24} />} label="Inicio" active />
        <NavItem icon={<Newspaper size={24} />} label="Noticias" />
        <NavItem icon={<FileText size={24} />} label="Trámites" />
        <NavItem icon={<Moon size={24} />} label="Modo" />
      </nav> */}

      {/* Desktop Sidebar Mock (Optional but nice) */}
      {/* <div className="hidden md:flex fixed left-0 top-0 bottom-0 w-20 bg-white border-r border-gray-100 flex-col items-center py-8 gap-8">
        <Home className="text-blue-500" />
        <Newspaper className="text-gray-400" />
        <FileText className="text-gray-400" />
        <Moon className="text-gray-400" />
      </div> */}
    </div>
  );
}

function EmergencyCard({
  icon,
  label,
  number,
  color,
}: {
  icon: ReactNode;
  label: string;
  number: string;
  color: string;
}) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${color} text-white rounded-2xl p-4 flex flex-col items-center justify-center gap-1 shadow-md`}
    >
      <div className="opacity-80">{icon}</div>
      <span className="text-[10px] font-bold uppercase tracking-wider">
        {label}
      </span>
      <span className="text-lg font-black">{number}</span>
    </motion.button>
  );
}

function LinkCard({
  icon,
  label,
  href,
}: {
  icon: ReactNode;
  label: string;
  href: string;
}) {
  return (
    <motion.button whileHover={{ y: -2 }}>
      <a
        className="bg-white rounded-2xl p-6 flex flex-col items-center justify-center gap-3 shadow-sm border border-gray-50"
        href={href}
        target="_blank"
      >
        <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center">
          {icon}
        </div>
        <span className="font-semibold text-sm text-[#1A1A1A]">{label}</span>
      </a>
    </motion.button>
  );
}

function ContactItem({ icon, text }: { icon: ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-4 text-gray-300">
      <div className="text-white/60">{icon}</div>
      <span className="text-sm font-medium">{text}</span>
    </div>
  );
}

function NavItem({
  icon,
  label,
  active = false,
}: {
  icon: ReactNode;
  label: string;
  active?: boolean;
}) {
  return (
    <button
      className={`flex flex-col items-center gap-1 ${active ? "text-blue-500" : "text-gray-400"}`}
    >
      {icon}
      <span className="text-[10px] font-bold">{label}</span>
    </button>
  );
}
