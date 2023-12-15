module.exports = (sequelize,DataTypes) => {
    
    const Order = sequelize.define("Gamma", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }
    },
    {
        tablename: "Gamma",
        timestamps: false
    });

    return Order;
}