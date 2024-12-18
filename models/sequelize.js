import {
    Sequelize
} from 'sequelize';

const sequelize = new Sequelize('dbecommerce', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false,
});

try {
    await sequelize.authenticate();
    console.log('Hahahah, berhasil bro...');
} catch (error) {
    console.error('Pesant: Masa gitu saja gagal !', error);
}

export default sequelize;