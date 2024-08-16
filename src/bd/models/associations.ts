import { Document, DocumentType, GenderType, User, UserType } from './models';

User.hasMany(Document, { foreignKey: 'user_id' });
Document.belongsTo(User, { foreignKey: 'user_id' });

DocumentType.hasMany(Document, { foreignKey: 'type_id' });
Document.belongsTo(DocumentType, { foreignKey: 'type_id' });

UserType.hasMany(User, { foreignKey: 'type_id' });
User.belongsTo(UserType, { foreignKey: 'type_id' });

GenderType.hasMany(User, { foreignKey: 'gender_id' });
User.belongsTo(GenderType, { foreignKey: 'gender_id' });
