module.exports = {
  siteMetadata: {
    active: 'Hi, I like your face.',
    inactive: 'Nooo, come back!',
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
