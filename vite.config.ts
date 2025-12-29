import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
	plugins: [react()],
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, "index.html"),
				services: resolve(__dirname, "services.html"),
				about: resolve(__dirname, "about.html"),
				contact: resolve(__dirname, "contact.html"),
				evchargers: resolve(__dirname, "evchargers.html"),
				securitycameras: resolve(__dirname, "securitycameras.html"),
				residential: resolve(__dirname, "residential.html"),
				commercial: resolve(__dirname, "commercial.html"),

				
			},
		},
	},
});
