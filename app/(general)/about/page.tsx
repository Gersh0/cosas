import type { Metadata } from "next";

export const metadata: Metadata = { //Para agregar todos los metadatos de la página que se necesiten para indexación en motores de búsqueda
 title: 'About Page',
 description: 'About Page Description',
};

export default function AboutPage() {
    return (
        <>
        <span className="text-7xl">About Page</span>
        </>
    );
}