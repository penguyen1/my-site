module.exports = {
  siteMetadata: {
    title: 'Hi, my name is Peter!',
    test: 'Pita',
  },
  plugins: [
  	'gatsby-plugin-react-helmet',
  	{
  		resolve: `gatsby-plugin-typography`,
  		options: {
  			pathToConfigModule: `src/utils/typography.js`,
  		},
  	},
  ],
};
