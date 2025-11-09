"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Sparkles,
  Menu,
  X,
  ImageIcon,
  Video,
  FileText,
  Zap,
  ArrowRight,
  Users,
  Star,
} from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const components: {
  title: string;
  href: string;
  description: string;
  icon: React.ReactNode;
}[] = [
  {
    title: "Image Generation",
    href: "/features/images",
    description:
      "Transform ideas into stunning visuals with AI-powered image creation.",
    icon: <ImageIcon className="w-4 h-4" />,
  },
  {
    title: "Video Creation",
    href: "/features/videos",
    description:
      "Create engaging video content from text descriptions automatically.",
    icon: <Video className="w-4 h-4" />,
  },
  {
    title: "Content Writing",
    href: "/features/content",
    description:
      "Generate compelling captions, articles, and marketing copy instantly.",
    icon: <FileText className="w-4 h-4" />,
  },
  {
    title: "AI Assistant",
    href: "/features/assistant",
    description:
      "Your personal creative partner for all content creation needs.",
    icon: <Sparkles className="w-4 h-4" />,
  },
];

const resources: {
  title: string;
  href: string;
  description: string;
  icon: React.ReactNode;
}[] = [
  {
    title: "Documentation",
    href: "/docs",
    description: "Complete guide to using Axo's features and capabilities.",
    icon: <FileText className="w-4 h-4" />,
  },
  {
    title: "Community",
    href: "/community",
    description: "Join thousands of creators in our vibrant community.",
    icon: <Users className="w-4 h-4" />,
  },
  {
    title: "Showcase",
    href: "/showcase",
    description: "See amazing creations from our talented users.",
    icon: <Star className="w-4 h-4" />,
  },
  {
    title: "API Access",
    href: "/api",
    description: "Integrate Axo's power into your own applications.",
    icon: <Zap className="w-4 h-4" />,
  },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gray-900/95 backdrop-blur-md border-b border-gray-800/50"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative">
                <Image src="/head.png" alt="Axo Logo" width={32} height={32} />
              </div>
              <span className="text-xl font-bold bg-linear-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Axo
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            <NavigationMenu>
              <NavigationMenuList className="bg-transparent flex items-center gap-1">
                {/* Home */}
                {/* <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink className="bg-transparent hover:bg-gray-800/70 text-white hover:text-white px-3 py-2 font-bold rounded-md">
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem> */}

                {/* Features */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-gray-800/70 text-white hover:text-white px-3 py-2 rounded-md">
                    Features
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-[#111928]/95 border border-gray-700 shadow-xl rounded-xl backdrop-blur-md">
                    <ul className="grid gap-3 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] p-4">
                      <li className="row-span-3 relative rounded-lg overflow-hidden">
                        <NavigationMenuLink asChild>
                          <Link
                            href="/"
                            className="relative flex h-full w-full flex-col justify-end rounded-md p-6 no-underline select-none focus:shadow-md transition-all duration-200"
                          >
                            <Image
                              src="/body.png"
                              alt="Axo Logo"
                              fill
                              className="object-contain opacity-40 pointer-events-none"
                            />
                            <div className="mb-2 text-lg font-medium text-white">
                              Discover Axo Tools
                            </div>
                            <p className="text-gray-400 text-sm leading-tight">
                              Generate stunning visuals, videos, and content in
                              seconds.
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <ListItem href="/tools/image" title="Image Generator">
                        Create unique visuals with Axo’s AI image creator.
                      </ListItem>
                      <ListItem href="/tools/video" title="Video Generator">
                        Transform ideas into short videos powered by AI.
                      </ListItem>
                      <ListItem href="/tools/prompt" title="Prompt Builder">
                        Craft perfect prompts for creative content generation.
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Resources */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-gray-800/70 text-white hover:text-white px-3 py-2 rounded-md">
                    Resources
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-[#111928]/95 border border-gray-700 shadow-xl rounded-xl backdrop-blur-md">
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] lg:w-[600px]">
                      {resources.map((resource) => (
                        <ListItem
                          key={resource.title}
                          title={resource.title}
                          href={resource.href}
                        >
                          {resource.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Pricing */}
                <NavigationMenuItem>
                  <Link href="/pricing" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "text-white bg-transparent hover:bg-gray-800/70 rounded-md hover:text-white"
                      )}
                    >
                      Pricing
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/pricing" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "text-white bg-transparent hover:bg-gray-800/70 rounded-md hover:text-white"
                      )}
                    >
                      Blog
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              variant="ghost"
              className="text-gray-300 hover:text-white hover:bg-gray-800/50"
            >
              Sign In
            </Button>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="bg-linear-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white border-0 shadow-lg">
                <Sparkles className="w-4 h-4 mr-2" />
                Get Started
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  className="p-2 hover:bg-gray-800/50 text-gray-300"
                >
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[85vw] max-w-md bg-gray-900 border-l border-gray-800"
              >
                <MobileNavigation onClose={() => setIsMobileMenuOpen(false)} />
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & {
    icon?: React.ReactNode;
  }
>(({ className, title, children, icon, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <motion.a
          ref={ref}
          className={`block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-800/50 hover:text-accent-foreground focus:bg-gray-800/50 ${className}`}
          whileHover={{ x: 4 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          {...props}
        >
          <div className="flex items-center gap-2">
            {icon && <div className="text-emerald-400">{icon}</div>}
            <div className="text-sm font-medium leading-none text-white">
              {title}
            </div>
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-gray-400 mt-2">
            {children}
          </p>
        </motion.a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

function MobileNavigation({ onClose }: { onClose: () => void }) {
  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-800">
        <Link href="/" className="flex items-center gap-2" onClick={onClose}>
          <div className="w-8 h-8 bg-linear-to-r from-emerald-400 to-cyan-400 rounded-lg flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-gray-900" />
          </div>
          <span className="text-xl font-bold bg-linear-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Axo
          </span>
        </Link>
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="text-gray-400 hover:text-white"
        >
          <X className="w-5 h-5" />
        </Button>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 p-6 space-y-6">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Link
            href="/"
            className="flex items-center gap-3 p-3 text-lg font-medium text-white rounded-lg hover:bg-gray-800/50 transition-colors"
            onClick={onClose}
          >
            Home
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="space-y-2">
            <h3 className="px-3 text-sm font-semibold text-gray-400 uppercase tracking-wider">
              Features
            </h3>
            <div className="space-y-1">
              {components.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="flex items-center gap-3 p-3 text-gray-300 rounded-lg hover:bg-gray-800/50 hover:text-white transition-colors group"
                    onClick={onClose}
                  >
                    <div className="text-emerald-400 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <div>
                      <div className="font-medium">{item.title}</div>
                      <div className="text-sm text-gray-400">
                        {item.description}
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="space-y-2">
            <h3 className="px-3 text-sm font-semibold text-gray-400 uppercase tracking-wider">
              Resources
            </h3>
            <div className="space-y-1">
              {resources.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="flex items-center gap-3 p-3 text-gray-300 rounded-lg hover:bg-gray-800/50 hover:text-white transition-colors group"
                    onClick={onClose}
                  >
                    <div className="text-blue-400 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <div>
                      <div className="font-medium">{item.title}</div>
                      <div className="text-sm text-gray-400">
                        {item.description}
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
        >
          <Link
            href="/pricing"
            className="flex items-center gap-3 p-3 text-lg font-medium text-white rounded-lg hover:bg-gray-800/50 transition-colors"
            onClick={onClose}
          >
            Pricing
          </Link>
        </motion.div>
      </nav>

      {/* Mobile CTA Buttons */}
      <div className="p-6 border-t border-gray-800 space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <Button
            variant="outline"
            className="w-full justify-center text-gray-300 border-gray-700 hover:bg-gray-800/50 hover:text-white"
            onClick={onClose}
          >
            Sign In
          </Button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <Button
            className="w-full justify-center bg-linear-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white border-0 shadow-lg"
            onClick={onClose}
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Get Started Free
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
