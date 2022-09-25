import { Pool } from "pg";

const connectionString = 'postgres://spkvhznf:QTl17rGxQVuMc5HJzS98OojhPd2N2M81@babar.db.elephantsql.com/spkvhznf';

const db = new Pool({ connectionString })

export default db