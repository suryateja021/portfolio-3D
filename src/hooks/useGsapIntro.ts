import { useLayoutEffect } from "react";
import gsap from "gsap";

export function useGsapIntro(targetRef: React.RefObject<HTMLElement | null>) {
    useLayoutEffect(() => {
        if (!targetRef.current) return;

        let ctx = gsap.context(() => {
            // Intro sequence
            gsap.fromTo(
                ".gsap-fade-up",
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.2,
                    stagger: 0.15,
                    ease: "power3.out",
                    delay: 0.2,
                }
            );

            gsap.fromTo(
                ".gsap-nav-down",
                { opacity: 0, y: -50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power2.out",
                }
            );
        }, targetRef);

        return () => ctx.revert();
    }, [targetRef]);
}
