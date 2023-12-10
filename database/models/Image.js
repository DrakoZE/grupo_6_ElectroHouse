module.exports = (sequelize,DataTypes) => {
    
    const Image = sequelize.define("Image", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        productId: {
            type: DataTypes.INTEGER
        },
        image: {
            type: DataTypes.BLOB
        },
        name: {
            type: DataTypes.STRING
        }
    },
    {
        timestamps: false
    });

    Image.associate = function(models){

        Image.belongsTo(models.Product, {
            as: "products",
            foreignKey: "productId"
        });

    }

    return Image;
}