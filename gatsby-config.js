module.exports = {
  siteMetadata: {
    title: 'Hi, my name is Peter!',
    test: 'Pita',
  },
  plugins: [
  	{
  		resolve: `gatsby-plugin-typography`,
  		options: {
  			pathToConfigModule: `src/utils/typography.js`,
  		},
  	},
  	'gatsby-plugin-react-helmet',
  ],
};
