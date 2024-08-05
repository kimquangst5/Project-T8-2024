tailwind.config = {
  content: [],
  theme: {
		container:{
			center: true,
		},
		screens: {
			"3xl": {
				'min': "1440px",
			},
			"2xl": {
				'max': "1440px",
			},
			'xl2': {
				'max': "1269.98px",
			},
			'xl': {
				'max': "1199.98px",
			},
			'lg': {
				'max': "991.98px",
			},
			'md': {
				'max': "767.98px",
			},
			'sm': {
				'max': "575.98px",
			},
		},
		extend: {
			colors: {
				color1: "black",
				color2: "#FFFFFF",
				color3: "#F2F0F1",
			},
			fontFamily: {
				font1: ['Be Vietnam Pro', 'sans-serif'],
			},
			backgroundImage: {
				'section7': 'linear-gradient(to bottom, white 50%, #0000001A 50%)',
			},
		},
	},
  plugins: [
		function ({ addComponents, theme }) {
			const screens = theme("screens", {});
			const maxWidths = {
				sm: `max-width: ${screens.sm}`, // 576px
				md: `max-width: ${screens.md}`, // 768px
				lg: `max-width: ${screens.lg}`, // 992px
				xl: `max-width: ${screens.xl}`, // 1200px
				xl2: `max-width: ${screens.xl2}`, // 1270
				'2xl': `max-width: ${screens['2xl']}`, // 1400px (thêm breakpoint mới)
				'3xl': `min-width: ${screens['3xl']}`,
			};

			const containers = {
				".container": {	
					maxWidth: "1239px",
					'@screen 3xl': { // Thêm quy tắc cho breakpoint mới
						maxWidth: "1239px", // Kích thước container cho màn hình lớn hơn
					    },
					'@screen 2xl': { // Thêm quy tắc cho breakpoint mới
						maxWidth: "1239px", // Kích thước container cho màn hình lớn hơn
					    },
					"@screen xl2": {
						maxWidth: "1160px",
					},
					"@screen xl": {
						maxWidth: "960px",
					},
					"@screen lg": {
						maxWidth: "720px",
					},
					"@screen md": {
						maxWidth: "540px",
					},
					"@screen sm": {
						maxWidth: "100%",
						paddingLeft: "16px",
						paddingRight: "16px",
					},
					
					//marginLeft: 'auto',
					//marginRight: 'auto',
				},
			};

			addComponents(maxWidths);
			addComponents(containers);
		},
	],
}

