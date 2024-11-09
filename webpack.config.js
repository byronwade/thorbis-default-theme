const path = require('path');

module.exports = {
  entry: './(src)/(app)/page.tsx',
  output: {
    filename: 'theme.js',
    path: path.resolve(__dirname, 'dist'),
    library: {
      type: 'module'
    }
  },
  experiments: {
    outputModule: true
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, './(src)'),
      '@/app': path.resolve(__dirname, './(src)/(app)'),
      '@/components': path.resolve(__dirname, './(src)/(app)/components'),
      '@/lib': path.resolve(__dirname, './(src)/lib')
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
}; 