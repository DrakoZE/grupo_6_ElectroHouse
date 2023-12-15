module.exports = (sequelize,DataTypes) => {
    
    const Order = sequelize.define("Order", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        amount: {
            type: DataTypes.DECIMAL(10,2)
        },
        status: {
            type: DataTypes.STRING,
            defaultValue: "active"
          },
    },
    {
        created_at: "created_at",
        updated_at: "updated_at"
    });

    return Order;
}