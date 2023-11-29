import app from './src/server';
import './src/config/db.config';

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
