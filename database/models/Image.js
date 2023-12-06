module.exports = (sequelize,DataTypes) => {
    
    const Image = sequelize.define("Image", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        productId: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        image: {
            type: DataTypes.BLOB,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        timestamps: false
    });

    Image.associate = function(models){

        Image.belongsTo(models.Product, {
            as: "products",
            foreignKey: "product_id"
        });

    }

    return Image;
}