import { publish } from 'gh-pages';

publish(
    'build', // path to public directory
    {
        branch: 'gh-pages',
        dest: 'docs',
        repo: 'https://github.com/Badenhoop/wedding-website.git', // Update to point to your repository
        user: {
            name: 'Philipp Badenhoop', // update to use your name
            email: 'philipp.badenhoop@hellocodeblog.com' // Update to use your email
        },
        dotfiles: true
    },
    () => {
        console.log('Deploy Complete!');
    }
);